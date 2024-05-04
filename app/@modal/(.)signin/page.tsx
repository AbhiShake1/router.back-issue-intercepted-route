"use client";
import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();
    return <div style={{
        position: "absolute",
        top: "50px",
        width: "fit",
        border: "1px solid red"
    }}>
        {"intercepted signin page"}
        <button
            onClick={() => {
                router.back();
            }}
        >
            {"back"}
        </button>
    </div>
}
