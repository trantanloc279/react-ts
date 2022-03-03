import { Provider } from "react-redux";
import { store } from "@app/store/index";
import { AppRoutes } from "@app/AppRoutes";
import { ToastProvider } from "react-toast-notifications";

export function App() {
  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={2000}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ToastProvider>
  );
}
