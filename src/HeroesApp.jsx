import { AuthProvider } from "./auth";
import { AppRouter } from "./router/appRouter";


export const HeroesApp = () => {
  return(
    <AuthProvider> {/* el AuthProvider pasa info a AppRouter */}
      <AppRouter/>
    </AuthProvider>
  );
};
