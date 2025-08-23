import { useLocation, useNavigate } from "react-router-dom";
import "./ArrangedEvents.css"

const events = [
  { id: 1, clubId: 1, name: "Insights into AI & Machine Learning", shortDesc: "AI & ML event highlights.", image: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/524857765_1333837512085226_5055616544498676870_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFSUCsbJ0aKdyTBDjs06_752DuGe7oGpl7YO4Z7ugamXjwoNbQ8Uvuvfa3VwM8CYZz1m4_sdANlZs8Wnc6eWIgh&_nc_ohc=2Mf3XSBRVvwQ7kNvwE0irlL&_nc_oc=AdmMv_9BFTUOy-eKphOJpAuqF8ob3_1I_Jp7FgYy5RcmAsL6TOAnsxJmAuNbt0pFU2Y&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=K8-DN51G0COHVR662SgNDw&oh=00_AfU2PUIoKHrEgH7ZV-z8m2-0aeBv1I127ErA0wRH8HyWYg&oe=68AFCE21" },
  { id: 2, clubId: 1, name: "Research & Co-Curriculer Activities", shortDesc: "To delve deeper into the world of research and co-curricular engagement.", image: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/481904294_659250683301819_7444983191577963698_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEdiI1jcnnEdysvXKWIr9CpWShj96WiTZxZKGP3paJNnHLajvFFYh2BVwcRSMTzVQAghSLBYiUlSAzSrSY8CWL-&_nc_ohc=mORB-PsV7D0Q7kNvwHELJMp&_nc_oc=AdlvLUSBZK1V2UACFgFVbd0NokjRwwPNmxyoiFCMNAfJKwcfu-Q74kx16wKfiDpDj1g&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=_2IfpllTqfH-HvSUETt4lA&oh=00_AfUEGPPr2lRRpn3zbZTlrCVz3aYMLongxuX50nCBUeWpvQ&oe=68AFE21D" },
  { id: 3, clubId: 2, name: "𝟔𝐭𝐡 𝐀𝐔𝐒𝐓𝐃𝐂 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐬 𝟐𝟎𝟐𝟒", shortDesc: "Get Ready for the Biggest Debate Event of the Year, 𝐃𝐞𝐛𝐚𝐭𝐞𝐫𝐬! ", image: "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/487440379_1061760239309868_3705970926606175359_n.jpg?stp=dst-jpg_s526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_eui2=AeHWXHTOA6ue9XFZi7924Hibo5pZk4s5JoqjmlmTizkmimPoXXocAi2rBIZtqWGtbLy9fefBjz6En2eh8-ecPvym&_nc_ohc=XqAiPyW5-80Q7kNvwFhkPAJ&_nc_oc=Admrsm_tAvBcYrek5CJz9-SjkC25Xe_-mh4UBIlHhE80qgWU8Jp0ep5egzX1ApR1UJY&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=tattpoWL5RolAn9glXI00w&oh=00_AfVZ2M1suNjbmlUUd76mwJPZatGDZuRcJedfsWnHaDawTA&oe=68AFD96F" },
  { id: 4, clubId: 3, name: "𝐒𝐨𝐥𝐢𝐝𝐖𝐨𝐫𝐤𝐬 𝐇𝐚𝐧𝐝𝐬-𝐎𝐧 𝐌𝐞𝐧𝐭𝐨𝐫𝐬𝐡𝐢𝐩 𝐏𝐫𝐨𝐠𝐫𝐚𝐦", shortDesc: "It's the final showdown for the 𝐒𝐨𝐥𝐢𝐝𝐖𝐨𝐫𝐤𝐬 𝐇𝐚𝐧𝐝𝐬-𝐎𝐧 𝐌𝐞𝐧𝐭𝐨𝐫𝐬𝐡𝐢𝐩 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 by 𝐀𝐔𝐒𝐓 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐃𝐞𝐬𝐢𝐠𝐧 𝐂𝐥𝐮𝐛.", image: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/518118931_1485713239513625_3362097285215677724_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC-FzDj6_wN1G_UOqitl7BNK_iJT-sckE0r-IlP6xyQVcoTyMce8wVnXJjf7tBK7T1fymBSyITiOYm4Cc2cxj5&_nc_ohc=oqsKBEcBBvwQ7kNvwFg7twI&_nc_oc=AdkHs9ZGnSdGaQtE9ZDC423Uk_0y_Q8ElrfbE_nvMqmTr9nAOztWk0x7__jFCWFU7_4&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=n89OI0-6_Lcq5ZujeCGHdA&oh=00_AfXtIdv6oZKpTO8rxCzNUDnNdbWnxGshriDVcHMVlu8wsw&oe=68AFE63A" },
];

export default function ArrangedEvents() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const clubId = params.get("club");

  const filteredEvents = clubId ? events.filter((e) => e.clubId === parseInt(clubId)) : events;

  return (
    <div className="events-container">
      <h1>Arranged Events</h1>
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card" onClick={() => navigate(`/images/${event.id}`)}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p className="event-short-desc">{event.shortDesc}</p> {/* Only short description */}
          </div>
        ))}
      </div>
    </div>
  );
}
