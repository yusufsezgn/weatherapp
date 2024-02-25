import Left from "./left/Left";
import Right from "./right/Right";

const Layout = ({ current, astronomy, hourly }) => {
  return (
    <div className="xl:w-3/4 w-11/12 xl:h-auto h-[92%] rounded-3xl shadow-md flex xl:flex-row flex-col relative bg-backgroundImage bg-cover bg-no-repeat bg-left-top">
      <div className="xl:w-1/4 w-full xl:h-full h-1/4">
        <Left current={current} astronomy={astronomy} />
      </div>
      <div className="xl:w-3/4 w-full h-full z-50 rounded-3xl">
        <Right current={current} astronomy={astronomy} hourly = {hourly} />
      </div>
    </div>
  );
};

export default Layout;
