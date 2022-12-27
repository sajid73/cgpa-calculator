import { Button, Select, Table } from "antd";
import { useState } from "react";
import { getSemester, storeSemester } from "../hooks/handleStorage";
import NewCourse from "./NewCourse";

const { Option } = Select;

const Semester = ({ data, index, semesters, setSemesters }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [semester, setSemester] = useState<any>(data);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const onCancel = () => {
        setIsModalOpen(false);
    }
    const handleCourseDelete = (i: number) => {
        // console.log(semester);
        const sem = getSemester();
        // removesem[index].courses[i]
        sem[index].courses.splice(i, 1);
        storeSemester(sem);
        setSemesters(sem);
        console.log(sem);
    }
    const columns = [
        {
            title: "Course code",
            dataIndex: 'courseCode',
            key: 'courseCode'
        },
        {
            title: "Credit",
            dataIndex: 'credit',
            key: 'credit'
        },
        {
            title: "Grade",
            dataIndex: 'grade',
            key: 'grade'
        },
        {
            title: "Action",
            dataIndex: '',
            key: 'x',
            render: (text: string, record: any, index: number) => <div>
                {/* <Button type="primary" style={{ marginRight: '10px' }}>Edit</Button> */}
                <Button type="primary" danger onClick={(e: any) => handleCourseDelete(index)}>Delete</Button>
            </div>
        }
    ]
    return (
        <div>
            <h1>Level-<span style={{ color: '#A06AB4' }}>{data.level}</span> Term-<span style={{ color: 'cyan' }}>{data.term}</span></h1>
            <div className="tableBody">
                {/* <p>Index is {index}</p> */}
                {semesters && semesters[index].courses && <Table pagination={false} dataSource={semesters[index].courses} columns={columns} style={{ marginBottom: '1rem' }} />}
                <Button type="primary" onClick={() => showModal()}>Add new course</Button>
                <NewCourse semData={data} semesterIndex={index} showModal={showModal} onCancel={onCancel} isModalOpen={isModalOpen} setSemesters={setSemesters} />
            </div>
        </div>
    );
};

export default Semester;