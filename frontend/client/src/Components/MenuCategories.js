import VerticalMenu from './VerticalMenu';

const categories = [
    {
        name: 'Category 1',
        items: ['Item 1.1', 'Item 1.2', 'Item 1.3']
    },
    {
        name: 'Category 2',
        items: ['Item 2.1', 'Item 2.2', 'Item 2.3']
    },
    {
        name: 'Category 3',
        items: ['Item 3.1', 'Item 3.2', 'Item 3.3']
    }
];

const MenuCategories = () => {
    return (
        <div>
            <h1>Vertical Menu</h1>
            <VerticalMenu categories={categories} />
        </div>
    );
};

export default MenuCategories;