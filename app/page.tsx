import Link from "next/link";

export default function Home() {
  const desafios = [
    {
      titulo: "Barra de progresso",
      solucoes: ["/desafios/1"],
      videoUrl: "https://video-link-1.com",
    },
    {
      titulo: "Diminuindo o número de renderizações",
      solucoes: ["/desafios/2"],
      videoUrl: "https://video-link-2.com",
    },
  ];

  return (
    <main className="flex flex-col items-center p-24 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8">100 Desafios React</h1>
      <table className="text-white">
        <thead>
          <tr>
            <th className="pr-4">Descrição do Problema</th>
            <th className="pr-4">Soluções</th>
            <th>Vídeo</th>
          </tr>
        </thead>
        <tbody>
          {desafios.map((desafio, index) => (
            <tr key={index}>
              <td className="pr-4">{desafio.titulo}</td>
              <td className="pr-4">
                {desafio.solucoes.map((solucao, idx) => (
                  <Link
                    className="text-blue-500 hover:underline block"
                    key={idx}
                    href={solucao}
                  >
                    Solução {idx + 1}
                  </Link>
                ))}
              </td>
              <td>
                <a
                  href={desafio.videoUrl}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assistir Vídeo
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
