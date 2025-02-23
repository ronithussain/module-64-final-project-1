import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name")} />
                    <select 
                    {...register("category")}
                    defaultValue="Pick a color" className="select select-bordered w-full ">
                        <option disabled={true}>select a category</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="pizza">Pizza</option>
                    </select>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;