interface DataProps {
    id:number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    },
}

async function getData() {
    const response = await fetch("https://api.github.com/users/everton3012/repos");
    return response.json()
}

export default async function Home() {

    const data: DataProps[] = await getData();

    
    return (
      <main>
        <h1>Página Contatos</h1>
        <span>Seja bem vindo a home</span>

        <br />
        <h3>Meus repositorios</h3>
        {data.map((item) => (
            <div key={item.id}>
                <strong>Reposirotio: </strong><a>{item.name}</a>
                <br /><br />
            </div>
        ))}
      </main>
    )
  }