import { Form, Input, Button, Descriptions } from 'antd'
import { useSearchParams } from "react-router-dom";
import 'antd/dist/reset.css'
import '../index.scss'
import logo from 'images/data.png'
import i2 from 'images/i2.png'
import i3 from 'images/i3.png'
import i4 from 'images/i4.png'
import i5 from 'images/i5.png'

import InputTitle from 'components/title'

const Result = () => {
  const [search] = useSearchParams();
  const namespace_id = search.get("namespace_id");
  const height = search.get("height");
  const gas_used = search.get("gas_used");
  const gas_wanted = search.get("gas_wanted");
  const data = search.get("data");
  const txhash = search.get("txhash");
  
  const [form] = Form.useForm()

  return (
    <div className='content'>
      <h1 style={{ fontSize: '40px' }}>Transaction info</h1>
      <div className='contentBox'>
        <Form form={form} layout='vertical' className='formBox form2Box'>
          <Form.Item label={<InputTitle obj={{ icon: i2, title: 'Namespace ID:' }}></InputTitle>}>
            <Input readOnly defaultValue={''} value={namespace_id} />
          </Form.Item>
          <Form.Item label={<InputTitle obj={{ icon: i3, title: 'Height:' }}></InputTitle>}>
            <Input readOnly defaultValue={''} value={height} />
          </Form.Item>
          <Form.Item label={<InputTitle obj={{ icon: i4, title: 'Gas used:' }}></InputTitle>}>
            <Input readOnly defaultValue={''} value={gas_used} />
          </Form.Item>
          <Form.Item label={<InputTitle obj={{ icon: i5, title: 'Gas wanted:' }}></InputTitle>}>
            <Input readOnly defaultValue={''} value={gas_wanted} />
          </Form.Item>
        </Form>

        <div className='bottom'>
          <InputTitle obj={{ icon: logo, title: 'Date' }}></InputTitle>

          <Descriptions layout='vertical' column={1} colon={false}>
            <Descriptions.Item label={<Button type='primary' className='blcBtn'>data</Button>}>{data}</Descriptions.Item>
            <Descriptions.Item label={<Button type='primary' className='blcBtn'>explorer</Button>}>{txhash}</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
  )
}

export default Result
