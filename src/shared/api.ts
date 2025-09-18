export const fetchColor = async (): Promise<string> => {
    const response = await fetch("https://x-colors.yurace.pro/api/random");
    const data = await response.json();
    return data.hex;
}