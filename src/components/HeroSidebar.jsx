
import Card from './Card';
import slack from '../assets/2111615.png';
import facebook from '../assets/124010.png'
import linkedin from '../assets/174857.png'
import googleAds from '../assets/2301145.png'
import gmail from '../assets/5968534.png'
import salesforce from '../assets/5968880.png'
import hubspot from '../assets/5968872.png'

function HeroSidebar() {

  const img = [
    slack, facebook, linkedin, googleAds, gmail, salesforce, hubspot
  ]
  const name=['Slack', 'Facebook', 'Linkedin', 'Google Ads', 'Gmail', 'Salesforce', 'Hubspot']


  return (
    <>
      <div className='pl-8 pb-10 flex-wrap flex pt-20 ml-80 z-0 gap-6 bg-gray-100 min-h-screen'>
        {
          img.length > 0 && img.map((el, index) => {
            return(
              <Card key={index} data={el} name={name[index]}></Card>
            )
          })
        }
      </div>
    </>
  )
}

export default HeroSidebar