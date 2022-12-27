import { Button, Form, InputNumber, Modal } from 'antd';


const NewSemester = ({ isModalOpen, onCancel, setSemesters, semesters }: any) => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        let newsems = [];
        if (semesters)
            newsems = semesters;
        newsems.push({ ...values, courses: [] });
        setSemesters(newsems)
        console.log(semesters);
        localStorage.setItem('semesters', JSON.stringify(newsems));
        // console.log(localStorage.getItem("semesters"))
        form.resetFields();
        onCancel();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Modal title="New Semester Info" open={isModalOpen} onCancel={onCancel} footer={[]}>
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
                    label="Level"
                    name="level"
                    rules={[{ required: true, message: 'Please input your level!' }]}
                >
                    <InputNumber min={1} max={5} placeholder='3' />
                </Form.Item>

                <Form.Item
                    label="Term"
                    name="term"
                    rules={[{ required: true, message: 'Please input your term!' }]}
                >
                    <InputNumber min={1} max={2} placeholder='2' />
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

export default NewSemester;