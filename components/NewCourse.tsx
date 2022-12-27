import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { getSemester, storeSemester } from '../hooks/handleStorage';

const { Option } = Select;

const NewCourse = ({ isModalOpen, onCancel, semesterIndex, semData, setSemesters }: any) => {
    const [form] = Form.useForm();
    const [sems, setSems] = useState<any[]>([])

    const onFinish = (values: any) => {
        let courses: any[] = []
        console.log(sems);
        if (sems[semesterIndex]?.courses)
            courses = courses.concat(sems[semesterIndex].courses)
        courses.push({ ...values, key: values.courseCode });

        const newobj = {
            level: sems[semesterIndex].level,
            term: sems[semesterIndex].term,
            courses
        }
        sems[semesterIndex] = newobj;
        setSemesters(sems);
        storeSemester(sems);
        form.resetFields();
        onCancel();
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        setSems(getSemester())
    }, [])
    // console.log(semesters[semesterIndex])
    return (
        <Modal title={`Add course to L-${semData.level} T-${semData.term}`} open={isModalOpen} onCancel={onCancel} footer={[]}>
            <Form
                form={form}
                name="New Semester"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ paddingTop: '1.5rem' }}
            >
                <Form.Item
                    label="Course code"
                    name="courseCode"
                    rules={[{ required: true, message: 'Please input your level!' }]}
                >
                    <Input placeholder='CSE-311' />
                </Form.Item>

                <Form.Item
                    label="Course credit"
                    name="credit"
                    rules={[{ required: true, message: 'Please input your term!' }]}
                >
                    <InputNumber min={0.75} max={4} placeholder='3.0' />
                </Form.Item>

                <Form.Item name="grade" label="Grade" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select grade"
                    >
                        <Option value="A+">A+</Option>
                        <Option value="A">A</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B">B</Option>
                        <Option value="B-">B-</Option>
                        <Option value="C+">C+</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                        <Option value="F">F</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default NewCourse;