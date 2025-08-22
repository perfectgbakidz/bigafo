import React, { useState, useRef } from 'react';

// An icon representing design/generation tools
const GeneratorIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-mapoly-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
);

const CANDIDATE_IMAGE_URL = "https://i.imgur.com/rDlcM5I.png";
const TEAM_LOGO_URL = "https://i.imgur.com/EVVtFJD.png";
const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1080;

const FlyerGenerator: React.FC = () => {
    const [name, setName] = useState('');
    const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
    const [userImagePreview, setUserImagePreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setIsGenerated(false); // Reset on name change
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsGenerated(false); // Reset on new image
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => setUserImage(img);
                const result = e.target?.result as string;
                img.src = result;
                setUserImagePreview(result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const triggerFileUpload = () => fileInputRef.current?.click();

    const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // Handle potential CORS issues with external images
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
            img.src = src;
        });
    };

    const generateFlyer = async () => {
        if (!userImage || !name.trim()) {
            alert("Please enter your name and upload a photo.");
            return;
        }

        setIsLoading(true);
        setIsGenerated(false);
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) {
            setIsLoading(false);
            return;
        }

        try {
            const [candidateImg, teamLogoImg] = await Promise.all([
                loadImage(CANDIDATE_IMAGE_URL),
                loadImage(TEAM_LOGO_URL),
            ]);

            // Clear canvas and draw background
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.fillStyle = '#006400'; // mapoly-green
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
            // Draw user image in a circle with a gold border
            const userImgX = 220, userImgY = 220, userImgRadius = 160;
            ctx.save();
            ctx.beginPath();
            ctx.arc(userImgX, userImgY, userImgRadius, 0, Math.PI * 2, true);
            ctx.strokeStyle = '#FFD700'; // mapoly-gold
            ctx.lineWidth = 15;
            ctx.stroke();
            ctx.closePath();
            ctx.clip();
            // Draw image scaled to fill the circle
            const aspect = userImage.width / userImage.height;
            let drawWidth = userImgRadius * 2;
            let drawHeight = drawWidth / aspect;
            if (drawHeight < userImgRadius * 2) {
                drawHeight = userImgRadius * 2;
                drawWidth = drawHeight * aspect;
            }
            ctx.drawImage(userImage, userImgX - drawWidth / 2, userImgY - drawHeight/2, drawWidth, drawHeight);
            ctx.restore();

            // Draw candidate image
            const candidateAspectRatio = candidateImg.width / candidateImg.height;
            const candidateHeight = 750;
            const candidateWidth = candidateHeight * candidateAspectRatio;
            ctx.drawImage(candidateImg, CANVAS_WIDTH - candidateWidth, CANVAS_HEIGHT - candidateHeight, candidateWidth, candidateHeight);

            // Draw texts (New Layout)
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';

            const startY = 85;
            const lineHeightAfterI = 100;
            const lineHeightAfterName = 70;
            const lineHeightAfterSupport = 60;

            // 1. "I"
            ctx.font = 'bold 60px Inter, sans-serif';
            ctx.fillText('I', 750, startY);
            
            // 2. User's Name (Dynamically Sized)
            const userName = name.trim().toUpperCase();
            const maxWidth = 660; // Max width for the name
            let fontSize = 90;
            const fontWeight = '900';
            const fontFamily = 'Inter, sans-serif';
            ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

            while (ctx.measureText(userName).width > maxWidth && fontSize > 30) {
                fontSize -= 2;
                ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
            }
            
            ctx.fillStyle = '#FFD700'; // mapoly-gold
            const nameY = startY + lineHeightAfterI;
            ctx.fillText(userName, 750, nameY);

            // 3. "I SUPPORT"
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 50px Inter, sans-serif';
            const supportY = nameY + lineHeightAfterName;
            ctx.fillText('I SUPPORT', 750, supportY);

            // 4. "AND I STAND WITH"
            const standWithY = supportY + lineHeightAfterSupport;
            ctx.fillText('AND I STAND WITH', 750, standWithY);
            
            // Candidate's Name and Title
            ctx.textAlign = 'left';
            ctx.font = '900 80px Inter, sans-serif';
            ctx.fillStyle = '#FFD700';
            const candidateNameText = 'Temitope Afolabi';
            ctx.fillText(candidateNameText, 50, 800);
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '600 50px Inter, sans-serif';
            ctx.fillText('(Big Afo)', 50, 870);

            ctx.font = 'bold 70px Inter, sans-serif';
            ctx.fillText('FOR SUG PRESIDENT', 50, 960);

            // Draw logo
            ctx.drawImage(teamLogoImg, 900, 890, 150, 150);
            setIsGenerated(true);
        } catch (error) {
            console.error("Error generating flyer:", error);
            alert("Sorry, there was an error generating the flyer. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const downloadFlyer = () => {
        const canvas = canvasRef.current;
        if (canvas && isGenerated) {
            const link = document.createElement('a');
            link.download = `big-afo-support-flyer.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="mx-auto bg-mapoly-gold/20 rounded-full h-32 w-32 flex items-center justify-center mb-6">
                <GeneratorIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
                Show Your Support
            </h2>
            <p className="text-xl text-gray-700 mb-4">Personalized Campaign Flyer Generator</p>
            <div className="w-24 h-1 bg-mapoly-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Create your own personalized campaign flyer right here. Upload your photo, add your name, and generate a custom design to share on social media and show your support for Big Afo!
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Controls */}
            <div className="bg-mapoly-light p-8 rounded-lg shadow-lg space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-mapoly-green mb-2">Your Full Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="e.g., Jane Doe"
                        className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-mapoly-gold focus:border-mapoly-green transition"
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold text-mapoly-green mb-2">Your Photo</label>
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={triggerFileUpload}
                            className="bg-mapoly-green text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
                        >
                            Upload Image
                        </button>
                        <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="hidden"
                        />
                        {userImagePreview && <img src={userImagePreview} alt="Your uploaded photo preview" className="h-16 w-16 rounded-full object-cover border-2 border-mapoly-gold" />}
                    </div>
                </div>
                <div className="pt-4 space-y-4">
                    <button
                        onClick={generateFlyer}
                        disabled={isLoading || !name.trim() || !userImage}
                        className="w-full bg-mapoly-gold text-mapoly-green font-bold py-4 px-8 rounded-full text-lg uppercase hover:bg-opacity-90 transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        {isLoading ? 'Generating...' : 'Generate Flyer'}
                    </button>
                    <button
                        onClick={downloadFlyer}
                        disabled={!isGenerated}
                        className="w-full bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-gray-800 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Download Flyer
                    </button>
                </div>
            </div>

            {/* Canvas Preview */}
            <div className="flex justify-center items-center bg-gray-200 rounded-lg shadow-inner p-4 aspect-square">
                 <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="w-full h-full object-contain rounded-md"
                    aria-label="Generated campaign flyer preview"
                >
                    Your browser does not support the canvas element.
                </canvas>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerGenerator;