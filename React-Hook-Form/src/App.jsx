import ReactHookValidation from "./components/ReactHookValidation";
import "./App.css";
import ZodValidation from "./components/ZodValidation";
export default function App() {
  return (
    <>
      <div className="App">
        <ReactHookValidation />
      </div>
      <div className="zodvalidation">
        <ZodValidation />
      </div>
    </>
  );
}
