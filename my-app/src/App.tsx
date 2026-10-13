import './App.css';
import EmployeeCard, { EmployeeCardProps } from './EmployeeCard';

function App() {
  const mockMember: EmployeeCardProps[] = [
    {
      id: 1 ,
      name: "モンキー・D・ルフィ",
      job: "キャプテン",
      email: "luffy@mugiwara.com",
      src: "/luffy.jpeg"
    },
    {
      id: 2 ,
      name: "ロロノア・ゾロ",
      job: "副キャプテン" ,
      email: "zoro@mugiwara.com",
      src: "/zoro.jpg"
    },
    {
      id: 3 ,
      name: "ナミ",
      job: "航海士",
      email: "nami@mugiwara.com",
      src: "/nami.jpeg"
    },
    {
      id: 4 ,
      name: "ウソップ",
      job: "船大工" ,
      email: "sogeking@mugiwara.com",
      src: "/usoppu.jpeg"
    },
    {
      id: 5 ,
      name: "トニートニーチョッパ",
      job: "医師" ,
      email: "chopper@mugiwara.com",
      src: "/choppa.jpeg"
    },
    {
      id: 6 ,
      name: "サンジ",
      job: "料理人" ,
      email: "sanji@mugiwara.com",
      src: "/sanji.jpeg"
    },
    {
      id: 7 ,
      name: "ニコ・ロビン",
      job: "学者" ,
      email: "robin@mugiwara.com",
      src: "/nico.jpg"
    },
  ];
  return (
    <div className="App">
      <h2>Employee</h2>
      <div className="card-list">
        {mockMember.map((data)=> (
          <EmployeeCard key={data.id} id={data.id} name={data.name} job={data.job} email={data.email} src={data.src} />
        ))}
      </div>
    </div>
  )
};

export default App;
