import '@testing-library/jest-dom';

import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '~/shared/store';

import { Form } from './Form';

let store: AppStore;

describe('Form', () => {
  let title: HTMLElement;
  let body: HTMLElement;
  let button: HTMLElement;

  const setup = () => {
    const { result } = renderHook(() => useForm());
    render(
      <Provider store={store}>
        <FormProvider {...result.current}>
          <Form />
        </FormProvider>
      </Provider>,
    );

    title = screen.getByRole('textbox', { name: /title/i });
    body = screen.getByRole('textbox', { name: /body/i });
    button = screen.getByRole('button', { name: /Add post/i });
  };

  beforeEach(() => {
    store = makeStore();
  });

  it('should render form fields', () => {
    setup();

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should accept input', async () => {
    setup();
    const user = userEvent.setup();

    await user.clear(title);
    await user.type(title, 'Test title');
    expect(title).toHaveValue('Test title');

    await user.clear(body);
    await user.type(body, 'Test body');
    expect(body).toHaveValue('Test body');
  });

  it('should display required validation', async () => {
    setup();
    const user = userEvent.setup();

    await user.clear(title);
    expect(screen.getByTestId('alert-title')).toBeInTheDocument();

    await user.clear(body);
    expect(screen.getByTestId('alert-body')).toBeInTheDocument();
  });

  it('should submit form', async () => {
    setup();
    const user = userEvent.setup();
    const handleOnSubmitMock = jest.fn();

    screen.getByTestId('signupForm').onsubmit = handleOnSubmitMock;

    await user.type(title, 'Test title');
    await user.type(body, 'Test body');
    await user.click(button);

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
