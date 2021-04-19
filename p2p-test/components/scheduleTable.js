import React, { useCallback,useRef, useEffect,useState } from 'react'
import Modal from '../components/addScheduleModal'

export default function schedulerTable () {
  const [showModal, setShowModal] = useState(false);

  const viewBox = `0 0 50 50`;
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  
  return (

    <div class="container">
      <table id="table" cellpadding="0" cellspacing="0">  
        <thead>
          <tr class="days">
            <th></th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
          </tr>
        </thead>  
        <tbody>
          <tr class="time800">
            <th>8:00</th>
            <td class="monday" rowspan="1" colspan='1'></td>
            <td class="tuesday" rowspan="1" ></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspawn="1"></td>
          </tr>
      
          <tr class="time830">
            <th>8:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time900">
            <th>9:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time930">
            <th>9:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1000">
            <th>10:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1030">
            <th>10:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1100">
            <th>11:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1130">
            <th>11:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1200">
            <th>12:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1230">
            <th>12:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1300">
            <th>13:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1330">
            <th>13:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1400">
            <th>14:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
          
          <tr class="time1430">
            <th>14:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1500">
            <th>15:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1530">
            <th>15:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1600">
            <th>16:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1630">
            <th>16:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1700">
            <th>17:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1730">
            <th>17:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1800">
            <th>18:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1830">
            <th>18:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1900">
            <th>19:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time1930">
            <th>19:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time2000">
            <th>20:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time2030">
            <th>20:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time2100">
            <th>21:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time2130">
            <th>21:30</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
          <tr class="time2200">
            <th>22:00</th>
            <td class="monday" rowspan="1"></td>
            <td class="tuesday" rowspan="1"></td>
            <td class="wednesday" rowspan="1"></td>
            <td class="thursday" rowspan="1"></td>
            <td class="friday" rowspan="1"></td>
          </tr>
      
        </tbody>
      </table>
      
      <Modal showModal = {showModal} closeModal = {closeModal}/>
      <div class="buttons">
        <button id="download">Download</button>
        <button type="button" id="course_adder" onClick = {openModal}>Add a course</button>
      </div>
    </div>  
  )
}