import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from '../../Vigilance/index';

// The only parameter that is required is the first, which should be the Module name.
// The other 2 parameters are optional.
// The 2nd parameter is the title of the settings window, seen in the top left above the
// category list.
// The 3rd parameter is an object that determines the sorting order of the categories.

@Vigilant('PGAddons', 'Settings', {
    getCategoryComparator: () => (a, b) => {
        // By default, categories, subcategories, and properties are sorted alphabetically.
        // You can override this behavior by returning a negative number if a should be sorted before b,
        // or a positive number if b should be sorted before a.

        // In this case, we can put Not general! to be above general.
        const categories = ['General', 'Rift'];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        // These function examples will sort the subcategories by the order in the array, so eeeeeee
        // will be above Category.
        const subcategories = ["General","Waypoints"];

        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
    getPropertyComparator: () => (a, b) => {
        // And this will put the properties in the order we want them to appear.
        const names = ["Useless","Enigma Souls"];

        return names.indexOf(a.attributesExt.name) - names.indexOf(b.attributesExt.name);
    }
})
class Settings {
    // @TextProperty({
    //     name: 'text',
    //     description: 'Example of text input that does not wrap the text',
    //     category: 'General',
    //     subcategory: 'Category',
    //     placeholder: 'Empty... :(',
    //     triggerActionOnInitialization: false,
    // })
    // textInput = '';

    // @TextProperty({
    //     name: 'password',
    //     description: 'Example of text input that uses protected',
    //     category: 'General',
    //     subcategory: 'Category',
    //     protected: true,
    // })
    // password = '';

    // @ColorProperty({
    //     name: 'Color Picker',
    //     description: 'Pick a color! (hopefully...)',
    //     category: 'General',
    //     subcategory: 'Category',
    // })
    // myColor = Color.BLUE;

    // @SelectorProperty({
    //     name: 'Selector',
    //     description: 'Select an option',
    //     category: 'General',
    //     subcategory: 'eeeeee',
    //     options: ['opt1', 'opty2', 'third option'],
    // })
    // myOptions = 0; // Stores index of option

    // @PercentSliderProperty({
    //     name: 'Percent Slider',
    //     description: 'Select a percent',
    //     category: 'General',
    //     subcategory: 'eeeeee',
    // })
    // percentSlider = 0.0;

    // @SwitchProperty({
    //     name: 'Do action!!!',
    //     description: 'toggle the checkbox in Not general! tab!',
    //     category: 'General',
    //     subcategory: 'Category',
    //     placeholder: 'Activate',
    // })
    // switch = false;
    // @CheckboxProperty({
    //     name: 'Useless',
    //     description: 'Useless',
    //     category: 'General',
    //     subcategory: "General"
    // })
    
    @CheckboxProperty({
        name: 'Enigma Souls',
        description: 'Shows Enigma Soul waypoints',
        category: 'Rift',
        subcategory: 'Waypoints'
    })
    show_enigma = false;

    constructor() {
        this.initialize(this);
        // this.registerListener('text', newText => {
        //     console.log(`Text changed to ${newText}`);
        // });

        // this.addDependency("Checkbox", "Do action!!!")
        this.setCategoryDescription('General', 'General stuff');
        this.setCategoryDescription('Rift', 'Only useful... in rift');
        // this.setSubcategoryDescription('General', 'Category', 'Shows off some nifty property examples.');
    }
}

export default new Settings();
