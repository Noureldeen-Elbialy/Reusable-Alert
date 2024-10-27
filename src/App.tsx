import { BellRing, Megaphone, OctagonAlert} from 'lucide-react';
import './App.scss'
import Alert from './components/Alert/Alert';

function App() {

  return (
    <>
      <main>
        <h1 style={{color:"orange",textAlign:"center"}}>WELCOME IN MY FIRST PROJ.</h1>
        <Alert type='alert-danger' title='Notifiction' icon={<Megaphone size={20} />}>
          <>
            <p>
              hello
            </p>
          </>
        </Alert>
        <Alert description='you are doing mistaks' type='alert-warning' title='Warning' icon={<OctagonAlert size={20}/>} />
        <Alert description='you are great' type='alert-info' title='info' icon={<BellRing size={20}/>} />
      </main>
    </>
  )
}

export default App;