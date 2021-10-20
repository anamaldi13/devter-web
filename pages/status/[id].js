import Devit from "../../components/Devit/index";
import { firestore } from "../../firebase/admin";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

export default function DevitPage(props) {
  const router = useRouter();

  if (router.isFallback) return <h1>Cargando....</h1>;
  return (
    <>
      <div>
        <Devit {...props} />
      </div>
      <Navbar />

      <style jsx>{`
        div {
          height: 100%;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "9lBjY53WQmPkSualx0y9" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection("devits")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}
