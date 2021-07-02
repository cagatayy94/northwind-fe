import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormField, Button, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function productAdd() {

    const initialValues = {
        productName: "asdas",
        unitPrice: 10
    };

    const schema = Yup.object({
        productName: Yup.string().required("product name required"),
        unitPrice: Yup.number().required("product unit price required"),
    })


    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={schema} 
            onSubmit={(values)=>{
                console.log(values)
            }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Ürün adı" />
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı" />
                <Button color="green" type="submit">Save</Button>
            </Form>
        </Formik>
    )
}
