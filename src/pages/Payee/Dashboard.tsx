import axios from 'axios'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

const PayeeDashboard = () => {
  const [tdata, settdata] = useState<any>([])

  useEffect(() => {
    async function getTdata() {
      let res = await axios.get('http://localhost:3001/invoices')
      console.log(res?.data)
      settdata(res?.data)
    }
    getTdata()
  }, [])

  return (
    <div>
      <div className=" text-[#ffff]">
        <Table className=" ">
          <Table.Head className="text-lg">
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Invoice name
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Amount
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Description
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className=" border-2 border-gray-300 bg-[#222222] text-[#43C484]">
              <Table.Cell className="text-white whitespace-nowrap font-medium ">
                {tdata.name}
              </Table.Cell>
              <Table.Cell> {tdata.amt}</Table.Cell>
              <Table.Cell>{tdata.desc}</Table.Cell>
              <Table.Cell className={`${true ? 'text-yellow-300' : ''}`}>
                Pending
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default PayeeDashboard
