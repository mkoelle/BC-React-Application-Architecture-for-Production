import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { InputField } from '@/components/form';
const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Clicky!
      </Button>
      <InputField label="Name" />
      <Link href="https://www.youtube.com/watch?v=SDwk59K0KMQ">
        Save Zelda
      </Link>
    </>
  );
};

export default LandingPage;
