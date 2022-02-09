function myDict()
{
    var Computer =
    {
        Brand:"Dell",
        Type:"Laptop",
        Processor_brand:"Intel",
        RAM:"16gb",
        CPU:"2.4ghz",
        GPU_brand:"nVidia",
        GPU_model:"GeForce GTX 960M",        
    };
    delete Computer.Brand;
    document.getElementById("dictionary").innerHTML = Computer.Brand;
}