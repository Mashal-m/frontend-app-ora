import { StrictDict } from '@edx/react-unit-test-utils';
import { getConfig } from '@edx/frontend-platform';

const baseUrl = () => getConfig().LMS_BASE_URL;

const api = () => `${baseUrl()}/api/`;

export default StrictDict({
  api,
});
