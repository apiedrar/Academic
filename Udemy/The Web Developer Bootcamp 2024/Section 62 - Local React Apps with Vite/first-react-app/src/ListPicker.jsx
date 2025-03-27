export default function ListPicker() {
    const lett = ['A', 'B', 'C'];
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const nums = [rand1, rand2, rand3];
    return (
        <div>
            <p>
                {lett}. It's easy as: {nums} !
            </p>
        </div>
    );
}