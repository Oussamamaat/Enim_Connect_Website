import OfferList from "../../components/OfferList";
import CandidateList from "../../components/CandidateList";
import CandidateDetail from "../../components/CandidateDetail";

export default function GestionCandidats() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      <OfferList />
      <CandidateList />
      <CandidateDetail />
    </div>
  );
}
