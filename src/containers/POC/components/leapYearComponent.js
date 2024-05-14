import React,{useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../poc.scss";
import {formatAppDate} from '../../../config/utills';

const LeapYearComponent = () =>{
    const [inputDate, setInputDate] = useState(formatAppDate(new Date()));
    const [output, setOutput] = useState("");

    useEffect(()=>{
        const year = new Date(inputDate).getFullYear();
        setOutput(!(year%4) ? "LEAP YEAR" : "NON LEAP YEAR");
          
    },[inputDate])
    return(
        <div className="leap-year-container">
             <Form >
            <Row className="mb-3">

                <Form.Group as={Col} controlId="date">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" value={inputDate} name="date"
                        onChange={(e) => { setInputDate(e.target.value) }}
                        
                    />


                </Form.Group>
                </Row>
                </Form>
            <div className="result">
                Result : <span>{output}</span>
            </div>
        </div>
    )
}

export default LeapYearComponent;