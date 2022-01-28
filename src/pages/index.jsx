// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Displaychart from "../components/Displaychart";
import Firstbody from "../components/Firstbody";
import VoteCardComp from "../components/VoteCard";

const HomePage = () => {
  const [election, setElection] = useState({});
  const [candidates, setCandidates] = useState([]);
  // const [voters, setVoters] = useState([]);
  // const user = useRecoilValue(UserAtom);

  useEffect(() => {
    const getElection = async () => {
      try {
        const { data } = await axios.get(`/vote/election/currect`);

        setElection(data);
        setCandidates(data?.candidates);
        console.log("data :", data);
        // setVoters(data?.voters);
      } catch (error) {
        console.log(error);
      }
    };
    getElection();
  }, []);

  return (
    <Wrapper className="homepage">
      <div className="container ">
        <Firstbody />
        <div className=" d-flex-column justify-content-center">
          {election?.type ? (
            <div className="">
              <h1 className="text-center fw-bold mt-4 text-success border p-2 px-5 bg-success text-light ">
                ON-GOING ELECTION
              </h1>
              <h2 className="mt-5 text-center text-success">
                CATEGORY: {election?.type} | YEAR: {election?.year}
              </h2>
            </div>
          ) : (
            <h2 className="text-uppercase mt-4 fw-bold mt-4 text-success border p-2 px-5 bg-success text-light ">
              There is no on-going election
            </h2>
          )}
          {election?.type ? (
            <h3 className="text-center mt-4">CANDIDATES</h3>
          ) : (
            ""
          )}

          <div
            className="vote-list d-flex-column justify-content-center"
            id="vote"
          >
            {candidates?.map((candidate, i) => (
              <VoteCardComp key={i} candidate={candidate} />
            ))}
          </div>
        </div>
      </div>
      {/* <VotingSection /> */}
      {/* <Displaychart /> */}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  .vote-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
