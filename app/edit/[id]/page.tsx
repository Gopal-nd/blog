
import EditPage from '@/components/EditPage';


const Create = async({params}:{params:{id:string}}) => {
  
 
 

    return (
        <EditPage post={params.id}/>
    );
}

export default Create
