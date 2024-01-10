import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { Post } from '~/shared/store/api/endpoints/posts';

import { Form } from './components';
import { containerSx, headerSx } from './styles';
import { schema } from './validation';

export const HomePage = () => {
  const methods = useForm<Post>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <Stack sx={containerSx}>
      <Typography sx={headerSx}>Add new post</Typography>
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </Stack>
  );
};
