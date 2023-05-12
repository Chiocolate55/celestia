import { Form, Input, Button, message } from 'antd'
import 'antd/dist/reset.css'
import '../index.scss'
import { useState } from 'react'
import logo from 'images/data.png'
import logo2 from 'images/switch.png'
import logo3 from 'images/dollar.png'
import logo4 from 'images/node.png'
import { useNavigate } from 'react-router-dom'
import InputTitle from 'components/title'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { dataToHex } from '../util/index';

const { TextArea } = Input

const Home = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
	const navigate = useNavigate();

  const goClick = () => {
    // navigate('/home/result')\
    setLoading(true);
    const value = form.getFieldValue();
    const { data, fee, gaslimit, node } = value;
    if (!data || !fee || !gaslimit || !node) {
      setLoading(false);
      return message.error("Insufficient data");
    }
    const namespace_id = uuidv4().replaceAll("-", "").slice(0, 16);
    const _data = {
      namespace_id,
      data: dataToHex(data),
      gas_limit: gaslimit * 1,
      fee: fee * 1,
    }
    axios.post("/api/submit_pfb", _data, {headers: { "Content-Type": "application/json" }})
      .then(res => {
        setLoading(false);
        const { height, gas_used, gas_wanted, data, txhash, raw_log } = res.data;
        if (!height) {
          return message.error(raw_log ? raw_log : "something error")
        }
        navigate(`/home/result?namespace_id=${namespace_id}&height=${height}&gas_used=${gas_used}&gas_wanted=${gas_wanted}&data=${data}&txhash=${txhash}`)

      }).catch(err => {
        setLoading(false);
        message.error(err.message);
      })
  }
  return (
    <div className='content'>
      <h1>
        Send <br />
        transaction
      </h1>
      <div className='contentBox'>
        <Form form={form} layout='vertical' className='formBox'>
          <div className='left'>
            <Form.Item  name="data" label={<InputTitle obj={{ icon: logo, title: 'Data' }}></InputTitle>}>
              <TextArea rows={14} />
            </Form.Item>
          </div>
          <div className='right'>
            <Form.Item name="gaslimit" label={<InputTitle obj={{ icon: logo2, title: 'Gas Limit' }}></InputTitle>}>
              <Input />
            </Form.Item>

            <Form.Item name="fee" label={<InputTitle obj={{ icon: logo3, title: 'Fee' }}></InputTitle>}>
              <Input />
            </Form.Item>

            <Form.Item name="node" label={<InputTitle obj={{ icon: logo4, title: 'Node' }}></InputTitle>}>
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type='primary' className='submit' onClick={goClick} loading={loading} >
                Send data
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Home
