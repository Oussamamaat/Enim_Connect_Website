import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";
import OfferList from "./components/OfferList";
import CandidateList from "./components/CandidateList";
import CandidateDetail from "./components/CandidateDetail";

export default function App() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased flex h-screen overflow-hidden">
      <SideNavBar />
      <main className="flex-1 ml-64 flex flex-col">
        <TopNavBar />
        <div className="flex flex-1 overflow-hidden">
          <OfferList />
          <CandidateList />
          <CandidateDetail />
        </div>
      </main>
    </div>
  );
}
