import axios, { HttpStatusCode } from 'axios';
import { formIface, FormType } from '../inteface/interface';

export async function sendEventForm(payload: formIface, file: File, formType: FormType,) {
  if(formType == FormType.tournament) {
    return await event(payload, file)
  }

  if(formType == FormType.camp) {
    return await camp(payload)
  }

  if(formType == FormType.contact) {
    return await contact(payload)
  }

}

async function event(payload: formIface, file: File) {
    const form = new FormData();
    form.append("files.payment", file, file.name)
    form.append('data', JSON.stringify(payload));

    try {
        const res = await axios.post(`${process.env.CMS_URL}/api/event-forms`, 
       form,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
            }
        })
        console.log(res.data)
        return res.data  
    } catch(err){
        return {
            statusCode: HttpStatusCode.BadRequest,
            message: 'eror while sending contact form',
            hasError: true
        }
    }
}

async function camp(payload: formIface) {
    try {
        const res = await axios.post(`${process.env.CMS_URL}/api/camp-forms`, 
        {data: payload},
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
            }
        })
        console.log(res.data)
        return res.data  
    } catch(err){
        return {
            statusCode: HttpStatusCode.BadRequest,
            message: 'eror while sending contact form',
            hasError: true
        }
    }
}

async function contact(payload: formIface) {
    try {
        const res = await axios.post(`${process.env.CMS_URL}/api/contact-forms`, 
        {data: payload},
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
            }
        })
        console.log(res.data)
        return res.data  
    } catch(err){
        return {
            statusCode: HttpStatusCode.BadRequest,
            message: 'eror while sending contact form',
            hasError: true
        }
    }
}
export async function upload(item: File) {
    const form = new FormData();
    form.append("files.payment", item, item.name)
    try {
        const res = await axios.post(`${process.env.CMS_URL}/api/upload`, 
        form,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
            }
        })
        console.log(res, res.data)
        return res.data

    } catch(err){
        return {
            statusCode: HttpStatusCode.BadRequest,
            message: 'eror while sending contact form',
            hasError: true
        }
    }
}