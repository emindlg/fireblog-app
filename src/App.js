import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './router/AppRouter';



function App() {
  return (
    <div className="App" >
      <AuthContextProvider>
        
        <AppRouter />
        
      </AuthContextProvider>
      

    </div>
  );
}

export default App;


//style={{backgroundImage: "url(https://picsum.photos/800/800)", imageSize:"cover", height: "100vh"}}