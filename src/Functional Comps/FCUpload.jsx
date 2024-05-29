import React, { useState, useRef, useEffect } from 'react';
import '../Registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import axios from 'axios';

function FCUpload() {
    const [formDataUpload, setFormData] = useState({
        item_ID: 0,
        item_Code: 0,
        name: '',
        image: 'null',
        color_Code: '',
        season: '',
        size: '',
        brand_ID: 0,
        price: 0,
        is_Favorite: false,
        status: 'live',
        user_Email: 'yakirco0412@gmail.com',
        clothingType_ID: 0,
    });

    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const imageCaptureInput = useRef(null);


    const Change = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCapture = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const openCamera = () => {
        imageCaptureInput.current.click();
    };

    const SubmitUpload = (event) => {
        event.preventDefault();
        console.log(formDataUpload);
        fetch('https://localhost:7215/api/Item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataUpload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Catch Error');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data === -1) {
                    console.log('item exsist');
                }
                if (data === 1) {
                    console.log('yhyyyyyyyyyyyyyyyyyyyyyy');

                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    };

    const [data, setData] = useState('Not Found');  // מצב התחלתי של טקסט התוצאה
    const [isActive, setIsActive] = useState(false); // כדי לשלוט על הפעלת הסריקה
    const handleUpdate = (err, result) => {
        if (result) {
            setData(result.text);
            setIsActive(false); // עצור את הסריקה לאחר קריאת תוצאה
        } else {
            setData('Scanning...'); // עדכון הטקסט בזמן סריקה
        }
        //console.log("1")
    };
    const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
    //     const fetchImage = async () => {
    //         try {
                
    //           // החליפי את ה-URL עם הכתובת של האתר שממנו את רוצה לשלוף את התמונה
    //           const result = await axios.get('http://www.zara.com/qr/0622449525105');
    //           const parser = new DOMParser();
    //           const htmlDocument = parser.parseFromString(result.data, "text/html");
    //           const imgElement = htmlDocument.querySelector("img"); // הוסיפי מזהה ספציפי אם יש צורך
    //           setImageUrl(imgElement.src);
    //         } 
    //         catch (error) {
    //           console.error('Error fetching image:', error);
    //         }
    //       };


    //     fetchImage();
    // }, []);

    return (
        <div className="form-container">
            <div className="header-container">
                <button onClick={() => window.history.back()} className="up-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h1 className='header'>LookALike</h1>

            </div>
            <h2>ADD NEW CLOTHING</h2>
            <form onSubmit={SubmitUpload}>
                {/* שדות הטופס */}
                <button onClick={openCamera} className='takephoto'>Take Photo</button>
                {imagePreviewUrl && <img src={imagePreviewUrl} alt="Preview" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />}

                <div>
                    <button className='takephoto' onClick={() => setIsActive(!isActive)}>
                        {isActive ? 'Stop Scanning' : 'Start Scanning'}
                    </button>
                    {isActive && (
                        <div>
                            <BarcodeScannerComponent
                                width={500}
                                height={500}
                                onUpdate={handleUpdate}
                            />

                            {/* <div>
                                <h1>Fetched Image</h1>
                              
                                {imageUrl && <img src={imageUrl} alt="Fetched" />}
                            </div>  */}
                        </div>
                    )}




                    <p>{data}</p> {/* תצוגת התוצאה או המצב */}
                </div>
                <input
                    ref={imageCaptureInput}
                    type="file"
                    accept="image/*"
                    capture="environment" // or use "user" for the front camera
                    onChange={handleCapture}
                    style={{ display: 'none' }}
                />
                <div>
                    <label>CLOTHING TYPE:
                        <select name="clothingType_ID" value={formDataUpload.clothingType_ID} onChange={Change}>
                            <option value="0">Select a type</option>
                            <option value="1">shirt</option>
                            <option value="2">pants</option>
                            <option value="3">dress</option>
                            <option value="4">Jeans</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>SEASON:
                        <select name="season" value={formDataUpload.season} onChange={Change}>
                            <option value="">Select a season</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                            <option value="other">Transition</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>BRAND:
                        <select name="brand_ID" value={formDataUpload.brand_ID} onChange={Change}>
                            <option value="">Select a brand</option>
                            <option value="1">Nike</option>
                            <option value="2">Adidas</option>
                            <option value="3">Puma</option>
                            <option value="4">Reebok</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Color:</label>
                    <input type="color" name="color_Code" value={formDataUpload.color_Code} onChange={Change} />

                </div>
                <div>
                    <label>Size:</label>
                    <input type="text" name="size" value={formDataUpload.size} onChange={Change} />

                </div>
                <div>
                    <label>Name:   </label>
                    <input type="text" name="name" value={formDataUpload.name} onChange={Change} />

                </div>
                <div>
                    <label>Price:   </label>
                    <input type="number" name="price" value={formDataUpload.price} onChange={Change} />

                </div>
                <button type="submit" className='submit'>Add Item</button>
            </form>

        </div>
    );
}

export default FCUpload;