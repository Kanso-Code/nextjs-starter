import {
  Card,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useBoolean } from 'usehooks-ts';

import { Post, useAddPostMutation } from '~/shared/store/api/endpoints/posts';

import {
  boxContainerSx,
  confirmationSx,
  inputFieldSx,
  inputLabelSx,
  inputSx,
  saveBtnSx,
} from './styles';

export const Form = () => {
  const [addPost] = useAddPostMutation();
  const {
    value: confirmationVisible,
    setTrue: showConfirmation,
    setFalse: hideConfirmation,
  } = useBoolean(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useFormContext<Post>();

  const onFormSubmit = useCallback(
    async (body: Post) => {
      try {
        await addPost(body).unwrap();
        reset();
        showConfirmation();
      } catch {}
    },
    [addPost, reset, showConfirmation],
  );

  return (
    <form aria-label="signup-form" onSubmit={handleSubmit(onFormSubmit)}>
      <Card sx={boxContainerSx}>
        {confirmationVisible && (
          <Stack sx={confirmationSx}>
            <Typography>Post successfully added.</Typography>
            <Button onClick={hideConfirmation}>Close</Button>
          </Stack>
        )}
        <Stack alignItems="end">
          <FormControl variant="standard" fullWidth sx={inputSx}>
            <FormLabel htmlFor="title" sx={inputLabelSx}>
              Post Title
            </FormLabel>
            <TextField
              size="small"
              margin="dense"
              variant="outlined"
              placeholder="Enter post title"
              id="title"
              sx={inputFieldSx}
              error={Boolean(errors.title)}
              {...register('title')}
            />
          </FormControl>
          <Typography data-testid="alert-title" mb={1} color="crimson">
            {errors?.title?.message}
          </Typography>
        </Stack>

        <Stack alignItems="end">
          <FormControl variant="standard" fullWidth sx={inputSx}>
            <FormLabel htmlFor="body" sx={inputLabelSx}>
              Post Body
            </FormLabel>
            <TextField
              size="small"
              margin="dense"
              multiline
              rows={6}
              variant="outlined"
              placeholder="Enter post body"
              id="body"
              sx={inputFieldSx}
              error={Boolean(errors?.body)}
              {...register('body')}
            />
          </FormControl>
          <Typography data-testid="alert-body" color="crimson">
            {errors?.body?.message}
          </Typography>
        </Stack>

        <Divider sx={{ mb: 2, mt: 2 }} />
        <Stack alignItems="end">
          <Button
            variant="contained"
            type="submit"
            sx={saveBtnSx}
            disabled={!!errors.body || !!errors.title}
          >
            Add post
          </Button>
        </Stack>
      </Card>
    </form>
  );
};
