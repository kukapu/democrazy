import { useEffect, useEffectLayout } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { charged, charging, getInfoResults, gettingInfoVotations, meVoted } from "../store"
import { VotationCompare } from "./VotationCompare"
import { VotationCompareVoted } from "./VotationCompareVoted"
import { VotationMajority } from "./VotationMajority"
import { VotationMajorityVoted } from "./VotationMajorityVoted"
import { VotationPonderation } from "./VotationPonderation"
import { VotationPonderationVoted } from "./VotationPonderationVoted"

export const VotationId = () => {

    const { user, isCharging } = useSelector( state => state.auth )
    const { title, votation, type } = useSelector( state => state.result )
    const { uid } = user
    const { votationId } = useParams()
    const dispatch = useDispatch()
    let votationInfo = {}

    const getInfoVotation = async() => {
        dispatch( charging() )

        votationInfo = await dispatch( gettingInfoVotations({ votationId: votationId }))
        dispatch( getInfoResults( votationInfo ))
        
        dispatch( charged() )
    }

    useEffect(() => {
        
        getInfoVotation()
        
        
    }, [])

    

    return (
        <div className="center">
            {
               ( isCharging ) 
               ? <h1> CARGANDO... </h1>
               : (
                    <>
                        <div>{ title }</div>
                        {
                            ( type === 'compare' )
                                ? (
                                    ( votation.hasOwnProperty( uid ) ) 
                                        ? <VotationCompareVoted votationId={ votationId } />
                                        : <VotationCompare votationId={ votationId } />
                                )
                                : <div></div>
                        }
                        {
                            ( type === 'majority' )
                                ? (
                                    ( votation.hasOwnProperty( uid ) ) 
                                        ? <VotationMajorityVoted votationId={ votationId }  />
                                        : <VotationMajority votationId={ votationId } multipleChoice={ votation.multipleChoice } />
                                )
                                : <div></div>
                        }
                        {
                            ( type === 'ponderation' )
                                ? (
                                    ( votation.hasOwnProperty( uid ) ) 
                                        ? <VotationPonderationVoted votationId={ votationId }  />
                                        : <VotationPonderation votationId={ votationId }  />
                                )
                                : <div></div>
                        }




                        <br/>
                        <Link to='/'> VOLVER </Link>
                    </>
               )
            }
           
        </div>
    )
}
