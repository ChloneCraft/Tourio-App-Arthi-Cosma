import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
<<<<<<< HEAD
import useSWR from "swr";
=======
>>>>>>> 8a95e11e3163d08b0ed4e1f1c6f7764b5ccfe624

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  // const places = useSWR("/api/places");
  const router = useRouter();

  async function addPlace(place) {
<<<<<<< HEAD
    // const response = await fetch("/api/places", {
    //   method: "POST",
    //   body: JSON.stringify(place),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log();
=======
    console.log("Place added (but not really...)");
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(response.status);
    }
>>>>>>> 8a95e11e3163d08b0ed4e1f1c6f7764b5ccfe624
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
