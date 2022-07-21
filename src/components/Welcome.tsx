interface WelcomeProps {}

const Welcome = (props: WelcomeProps) => {
  return (
    <article>
      <h1 className="text-5xl">Welcome To The React Practice Dojo</h1>
      <h3>Knocking off the rust by building features.</h3>
    </article>
  );
};

export default Welcome;
