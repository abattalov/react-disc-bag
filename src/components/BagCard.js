import React from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import DiscForm from './DiscForm';

function BagCard(props) {

  let params = useParams();

  const bag = props.bags.find(bag => bag.id === parseInt(params.id))

  return (
    <div>
        <h2>{bag.name}</h2>
        <table className="disc-table" >
          <thead>
                <tr>
                    <th>Disc Name</th>
                    <th>Brand</th>
                    <th>Speed</th>
                    <th>Glide</th>
                    <th>Turn</th>
                    <th>Fade</th>
                    <th>Plastic</th>
                    <th>Weight</th>
                </tr>
          </thead>
          {bag.discs.map(disc => (
          <tbody key={disc.id}>
            <tr>
              <td>{disc.name}</td>
              <td>{disc.brand}</td>
              <td>{disc.speed}</td>
              <td>{disc.glide}</td>
              <td>{disc.turn}</td>
              <td>{disc.fade}</td> 
              <td>{disc.plastic}</td>
              <td>{disc.weight}</td>
            </tr>
          </tbody>
          ))}
        </table>
        <DiscForm/>
    </div>
  )
}

const mapStateToProps = state => {
    return{
      bags: state.bags
    }
}

export default connect(mapStateToProps)(BagCard)