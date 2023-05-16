import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { InputField } from '@/components/form';
const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Clicky!
      </Button>
      <InputField />
      <Link />
    </>
  );
};

export default LandingPage;
