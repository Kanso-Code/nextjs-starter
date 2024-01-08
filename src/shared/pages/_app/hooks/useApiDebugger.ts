import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'usehooks-ts';

import { api } from '~/shared/store/api/reducer';

export const useApiDebugger = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const refetch = router.query.refetch !== undefined;

  useEffectOnce(() => {
    if (refetch) {
      // refetch data on client-side to help see the api requests we make
      dispatch(api.util.resetApiState());
    }
  });
};
