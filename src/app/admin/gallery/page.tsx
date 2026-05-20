"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  UploadCloud,
  Lock,
  Image as ImageIcon,
  Video,
  Trash2,
  ExternalLink,
} from "lucide-react";

type Item = {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  uploadedAt: string;
};

export default function AdminGalleryPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("ck_admin_pwd");
    if (saved) {
      setPassword(saved);
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    refresh();
  }, [unlocked]);

  async function refresh() {
    const res = await fetch("/api/gallery/list", { cache: "no-store" });
    const data = await res.json();
    setConfigured(!!data.configured);
    setItems(data.items ?? []);
  }

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!password) return;
    sessionStorage.setItem("ck_admin_pwd", password);
    setUnlocked(true);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      toast.error("Pick a file first");
      return;
    }
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/gallery/upload", {
      method: "POST",
      headers: { "x-admin-password": password },
      body: fd,
    });
    setUploading(false);
    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: "Failed" }));
      if (res.status === 401) {
        toast.error("Wrong admin password");
        sessionStorage.removeItem("ck_admin_pwd");
        setUnlocked(false);
      } else {
        toast.error(error ?? "Upload failed");
      }
      return;
    }
    toast.success("Uploaded!");
    setFile(null);
    (document.getElementById("file-input") as HTMLInputElement).value = "";
    refresh();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Admin · Gallery"
          title="Add photos and videos to the"
          highlight="public gallery."
          description="Drag and drop a file, or pick from your device. Uploads appear instantly on the public Gallery page."
        />

        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {!unlocked ? (
              <Card className="rounded-3xl border-0 bg-white shadow-[0_12px_30px_rgba(26,31,75,0.08)]">
                <CardContent className="p-8 sm:p-10">
                  <Lock className="h-8 w-8 text-ck-red" />
                  <h2 className="mt-4 font-[family-name:var(--font-fredoka)] text-2xl font-bold text-ck-navy">
                    Admin access only
                  </h2>
                  <p className="mt-1 text-ck-navy/70 text-sm">
                    Enter the admin password to manage gallery uploads.
                  </p>
                  <form onSubmit={handleUnlock} className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="pwd" className="font-bold">
                        Admin password
                      </Label>
                      <Input
                        id="pwd"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                        className="mt-1.5 rounded-xl bg-ck-cream/40 border-ck-cream focus-visible:ring-ck-red"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-ck-red hover:bg-ck-red/90 py-6 text-base font-bold"
                    >
                      Unlock
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card className="rounded-3xl border-0 bg-white shadow-[0_12px_30px_rgba(26,31,75,0.08)]">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-ck-navy">
                          Upload a photo or video
                        </p>
                        <p className="text-sm text-ck-navy/60 mt-0.5">
                          Images & videos up to 50MB.
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          sessionStorage.removeItem("ck_admin_pwd");
                          setUnlocked(false);
                          setPassword("");
                        }}
                        className="text-ck-navy/60"
                      >
                        Lock
                      </Button>
                    </div>

                    {!configured && (
                      <div className="mt-5 rounded-2xl bg-ck-cream/60 p-4 text-sm text-ck-navy">
                        Storage isn't configured. Add{" "}
                        <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                          BLOB_READ_WRITE_TOKEN
                        </code>{" "}
                        and{" "}
                        <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                          ADMIN_PASSWORD
                        </code>{" "}
                        env vars on Vercel.
                      </div>
                    )}

                    <form onSubmit={handleUpload} className="mt-6 space-y-4">
                      <label
                        htmlFor="file-input"
                        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ck-cream bg-ck-cream/30 p-10 text-center transition-colors hover:bg-ck-cream/50"
                      >
                        <UploadCloud className="h-8 w-8 text-ck-orange" />
                        <p className="font-bold text-ck-navy">
                          {file ? file.name : "Click to choose a file"}
                        </p>
                        <p className="text-xs text-ck-navy/60">
                          Image or video, up to 50MB
                        </p>
                        <input
                          id="file-input"
                          type="file"
                          accept="image/*,video/*"
                          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                          className="hidden"
                        />
                      </label>
                      <Button
                        type="submit"
                        disabled={!file || uploading}
                        className="w-full rounded-xl bg-ck-red hover:bg-ck-red/90 py-6 text-base font-bold disabled:opacity-50"
                      >
                        {uploading ? "Uploading…" : "Upload to gallery"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="mt-10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-ck-navy">
                      Recent uploads
                    </p>
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-ck-cream text-ck-navy font-bold"
                    >
                      {items.length}
                    </Badge>
                  </div>
                  {items.length === 0 ? (
                    <p className="text-sm text-ck-navy/60">
                      No uploads yet. Add the first one above.
                    </p>
                  ) : (
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {items.map((it) => {
                        const isVideo = it.contentType.startsWith("video/");
                        return (
                          <li
                            key={it.pathname}
                            className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ck-navy/5"
                          >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ck-cream text-ck-navy">
                              {isVideo ? (
                                <Video className="h-5 w-5" />
                              ) : (
                                <ImageIcon className="h-5 w-5" />
                              )}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-semibold text-ck-navy text-sm">
                                {it.pathname.replace("gallery/", "")}
                              </p>
                              <p className="text-xs text-ck-navy/60">
                                {(it.size / 1024 / 1024).toFixed(2)} MB ·{" "}
                                {new Date(it.uploadedAt).toLocaleString()}
                              </p>
                            </div>
                            <a
                              href={it.url}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full p-2 text-ck-navy/60 hover:bg-ck-cream hover:text-ck-navy"
                              aria-label="Open"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </>
            )}

            <p className="mt-8 text-center text-xs text-ck-navy/50">
              <Link href="/gallery" className="hover:text-ck-navy underline">
                View public gallery →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
