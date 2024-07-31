import Button from "UI/Button";
import CollectionsCard from "UI/CollectionsCard";
import ComponentListRender from "UI/ComponentListRender";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import Grid from "UI/Grid";
import { COLLECTIONS_CARD } from "helpers/utils";
import { Link } from "react-router-dom";

function CollectionsSection() {
  return (
    <Container className="border-l-[1px] border-[#E8E9EA] pt-[9.6rem] space-y-[3.6rem] overflow-hidden">
      <h2 className=" text-[3rem] font-[700]">Our Collections</h2>
      <Flex
        row
        className=" flex-col space-y-[1rem] md:space-y-0 md:flex-row md:justify-between md:items-center"
      >
        <div className=" flex space-x-[0.8rem] md:w-auto">
          <Button text="All categories" variant="primary" radius="sm" />
          <Button text="Art" variant="secondary" radius="sm" />
          <Button text="Celebrities" variant="secondary" radius="sm" />
          <Button text="Gaming" variant="secondary" radius="sm" />
          <Button text="Sport" variant="secondary" radius="sm" />
        </div>
        <Link to="#" className=" underline text-[#0E1218]">
          View more
        </Link>
      </Flex>
      <Grid
        elementPerRow={4}
        elementPerRowMobile={1}
        elementPerRowTablet={2}
        columnWidthTablet="282px"
        className=" place-items-center place-content-center"
      >
        <ComponentListRender
          data={COLLECTIONS_CARD}
          Component={CollectionsCard}
        />
      </Grid>
    </Container>
  );
}

export default CollectionsSection;