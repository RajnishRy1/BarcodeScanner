import {useState} from 'react';
import {Button} from '@material-ui/core'
import '../css/Card.css'

function Share({ label, text, title, link }) {
    // const canonical = document.querySelector("link[rel=canonical]");
    // let url = canonical ? canonical.href : document.location.href;
    let url=link;
    const shareDetails = { url, title, text};
    const [showModal, setShowModal] = useState(false);
    const handleSharing = async () => {
      if (navigator.share) {
        try {
          await navigator
            .share(shareDetails)
            .then(() =>
              console.log("Hooray! Your content was shared to tha world")
            );
        } catch (error) {
          console.log(`Oops! I couldn't share to the world because: ${error}`);
        }
      } else {
        // fallback code
        setShowModal(true);
        console.log(
          "Web share is currently not supported on this browser. Please provide a callback"
        );
      }
    };
    return (
      <div className='share'>
      <Button onClick={handleSharing}>
        <span >{label}</span>
      </Button>
      </div>
    );
  }

  export default Share;