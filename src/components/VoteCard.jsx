/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { socket } from "..";
import { UserAtom } from "../atoms/userAtom";

const VoteCardComp = ({ candidate }) => {
  const user = useRecoilValue(UserAtom);
  const [votes, setVotes] = useState(candidate.votes);
  const router = useHistory();

  useEffect(() => {
    // socket.on("error-vote", (data) => {
    // 	alert(data);
    // });
    socket.on("vote-response", (data) => {
      if (candidate?._id === data?.candidate) {
        // socket.on("user-voted", (data) => console.log(data));
        setVotes([data, ...votes]);
      }
      // socket.off("vote-response");
    });

    // return () => socket.off("vote-response");
  });

  const handleVote = async () => {
    if (!user) return router.push("/login");
    const payload = {
      voter: user?._id,
      candidate: candidate?._id,
      election: candidate?.election,
    };
    socket.emit("voted", payload);
  };
  return (
    <Wrapper className="">
      <div className="inner">
        <div className="left d-flex-column align-items-center justify-content-center m-5">
          <div className="d-flex justify-content-center">
            <img src={candidate?.user?.image} alt="" className="avatar" />
          </div>
          <div className="text-content ms-2">
            <h5 className="m-2 text-center">{candidate?.user?.name}</h5>
            <h4 className="text-center fw-bold">{votes.length}</h4>
            <div className="d-flex justify-content-center">
              <button
                className="btn  btn-sm mt-2 btn-warning p-2 px-5 fw-bold fs-6"
                disabled={!user}
                onClick={handleVote}
              >
                Click To Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default VoteCardComp;

const Wrapper = styled.div`
  .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;
