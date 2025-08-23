import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const clubs = [
  { id: 1, name: "AUST Programming and Informatics Club", image: "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/470580057_601646439062244_4683294314110621062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFzEY1HFB1wH8FTdGxtxPMDfW1Lql1fqk19bUuqXV-qTTCv7uxUJVvUzfzilNznbt8M7IYdwD2ewxhDDohtBTPv&_nc_ohc=UroBJiNpr2gQ7kNvwE64_U0&_nc_oc=AdlcZw_SPNj0YmBtNFD0ycHm27XOPGSfRAtbkDQxlLYNTpuIS3GmA38lg-0fUmdFduY&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=QYIsWkqLyES9Z1zRrJn3bA&oh=00_AfUWuP0_0jOlE3wNB4UwkzMmw5N6jiGVpxju0oyb-XAKWg&oe=68AFB0CD" },
  { id: 2, name: "AUST Debating Club", image: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/453268454_888875436598350_8661844998148581990_n.jpg?stp=c91.65.556.555a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHrnXG7VjfmFItfaLr6tf2wBezjnlwCDpoF7OOeXAIOmnfnSIbLnVoZcOounj2lZ7cvLVWUh0os6KhVCnhOkKbh&_nc_ohc=IM2EFqRQSOgQ7kNvwGjzDSJ&_nc_oc=Adm2IsgoUDcvF0dOXnxgA9HQ79yKWfX8EasK6DCpYU3PNnHXYLVEtf9eZr5glnmCK3Q&_nc_zt=24&_nc_ht=scontent.fdac41-1.fna&_nc_gid=-wFLrb-nv_N5l_TgtnJBqg&oh=00_AfWxSHWhw3yUf4DscYVhKaxBnWFJ7Vh48wIuTE2S4YApAg&oe=68AFD35E" },
  { id: 3, name: "AUST Innovation and Design Club ", image: "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/454374975_1213384450079840_2600559824876628388_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFLp3mW0YNQJJ-5fmSpfO7vgLADf4ZYekyAsAN_hlh6TB4lkWvA4hi0D4-vCLXrA56_bTHGYoVgKi0y_IHoXKI0&_nc_ohc=ys6FH-YPC8YQ7kNvwFgBtV-&_nc_oc=AdlwGgjmGu1hiQmvqhtvWJV2RTDzSA6gGTNPnc0or_r7tbXMtqdlsaEtU8nIgSB7Vc0&_nc_zt=24&_nc_ht=scontent.fdac41-1.fna&_nc_gid=vfTApa39ypU7KR0Jx0yTcQ&oh=00_AfUUO0agWSCHkHj_j3j-iqht_jcQ6sSaT94NYZeso4TLgw&oe=68AFE8FB" },
];

export default function Gallery() {
  const navigate = useNavigate();

  const handleClick = (clubId) => {
    navigate(`/arrangedevents?club=${clubId}`);
  };

  return (
    <div className="gallery-container">
      <h1>Clubs Gallery</h1>
      <div className="gallery-grid">
        {clubs.map((club) => (
          <div key={club.id} className="club-card" onClick={() => handleClick(club.id)}>
            <img src={club.image} alt={club.name} />
            <h3>{club.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
