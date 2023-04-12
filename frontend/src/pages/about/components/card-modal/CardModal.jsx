import ReactDOM from 'react-dom';
import close from 'assets/svgs/close-icon.svg'
import './card-modal.scss';

const CardModal = (props) => {
    const {foundersDetails, teamDetails, closeModal} = props

  return ReactDOM.createPortal(
    <section className="overlay" onClick={closeModal}>
        {foundersDetails?.map((founder, index)=> (
            <figure className="d-flex card" key={index} onClick={(e) => e.stopPropagation()}>
                <div className="avatar-container">
                    <img src={founder.avatar} loading="lazy" className="avatar" alt={`profile avatar of ${founder.full_name}`} />
                </div>
                <figcaption>
                    <img src={close} loading="lazy" className="close-btn" onClick={closeModal} alt="close icon"/>
                    <h3 className='big-heading-3'>{founder.full_name}</h3>
                    <h4 className='big-heading-4'>{founder.position}</h4>
                    <p>{founder.summary}</p>
                </figcaption>
            </figure>
        ))}

        {teamDetails?.map((team, index)=> (
            <figure className="d-flex card" key={index}>
                <img src={team.avatar} loading="lazy" className="avatar" alt={`profile avatar of ${team.full_name}`} />
                <figcaption>
                    <p className="close-btn" onClick={closeModal}>X</p>
                    <h3 className='big-heading-3'>{team.full_name}</h3>
                    <h4 className='big-heading-4'>{team.position}</h4>
                    <p>{team.summary}</p>
                </figcaption>
            </figure>
        ))}
    </section>,
    document.getElementById('portal')
  )
}

export default CardModal
// import ReactDOM from 'react-dom';
// import './card-modal.scss';
// import close from 'assets/svgs/close-icon.svg'

// const CardModal = (props) => {
//     const {foundersDetails, teamDetails, closeModal} = props

//   return ReactDOM.createPortal(
//     <section className="overlay" onClick={closeModal}>
//         {foundersDetails?.map((founder, index)=> (
//             <figure className="d-flex card" key={index} onClick={(e) => e.stopPropagation()}>
//                 <img src={founder.avatar} loading="lazy" className="avatar" alt={`profile avatar of ${founder.full_name}`} />
//                 <figcaption>
//                     <img src={close} loading="lazy" className="close-btn" onClick={closeModal} alt=""/>
//                     <h3 className='big-heading-3'>{founder.full_name}</h3>
//                     <h4 className='big-heading-4'>{founder.position}</h4>
//                     <p>{founder.summary}</p>
//                 </figcaption>
//             </figure>
//         ))}

//         {teamDetails?.map((team, index)=> (
//             <figure className="d-flex card" key={index}>
//                 <img src={team.avatar} loading="lazy" className="avatar" alt={`profile avatar of ${team.full_name}`} />
//                 <figcaption>
//                     <p className="close-btn" onClick={closeModal}>X</p>
//                     <h3 className='big-heading-3'>{team.full_name}</h3>
//                     <h4 className='big-heading-4'>{team.position}</h4>
//                     <p>{team.summary}</p>
//                 </figcaption>
//             </figure>
//         ))}
//     </section>,
//     document.getElementById('portal')
//   )
// }

// export default CardModal