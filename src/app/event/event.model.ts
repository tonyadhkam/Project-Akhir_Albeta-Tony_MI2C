export class Event
{
    public name:string;
    public date:string;
    public place:string;
    public description:string;
    public imagePath:string;

    constructor(name:string,date:string,place:string,desc:string,imagePath:string)
    {
        this.name=name;
        this.date=date;
        this.place=place;
        this.description=desc;
        this.imagePath=imagePath;
    }
}