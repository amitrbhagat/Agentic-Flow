import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Chat from "./pages/Chat";

import Knowledge from "./pages/Knowledge";

import Executions from "./pages/Executions";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        >

          <Route
            path="chat"
            element={<Chat />}
          />

          <Route
            path="knowledge"
            element={<Knowledge />}
          />

          <Route
            path="executions"
            element={<Executions />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
