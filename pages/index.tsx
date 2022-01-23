import { GetServerSideProps, NextPage } from 'next'

interface IndexPageProps {
  catImage: { url: string }
}
const IndexPage: NextPage<IndexPageProps> = ({ catImage }) => {
  return (
    <main>
      <h1>Meow!</h1>
      <img src={catImage.url} alt="A random cat image"/>
    </main>
  )
}
export default IndexPage

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const response = await fetch('https://aws.random.cat/meow')
  const catImage = await response.json()
  return {
    props: {
      catImage: {
        url: catImage.file
      }
    },
  }
}